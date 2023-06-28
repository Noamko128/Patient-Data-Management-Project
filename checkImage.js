const FormData = require('form-data');
const fetch = require('node-fetch');

// Imagga API certifications
const imaggaApiKey = 'acc_46a9d32c0b999e8';
const imaggaApiSecret = '7683c03e900f5ea0865e84b74ee5168a';

/**
 * Function to check if the uploaded image is a face image using the Imagga API.
 * @param {Buffer} picture - The uploaded image file.
 * @returns {Promise<boolean>} - A boolean indicating if the image is a face image.
 */
const checkImage = async (picture) => {
  try {
    // Convert the image data to base64 format
    const imageBase64 = picture.data.toString('base64');

    // Create a new FormData object and append the image base64 data
    const formData = new FormData();
    formData.append('image_base64', imageBase64);

    // Prepare the request options for the Imagga API
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${imaggaApiKey}:${imaggaApiSecret}`).toString('base64')}`,
      },
      body: formData,
    };

    // Make the request to the Imagga API to get image tags
    const response = await fetch('https://api.imagga.com/v2/tags', requestOptions);
    const responseObj = await response.json();

    // Filter the tag containing the "face" value and extract the confidence level for the "face" tag
    const faceConfidences = responseObj.result.tags
      .filter(tag => tag.tag.en === "face")
      .map(tag => tag.confidence);

    // Check if the confidence level for the "face" tag is greater than 40
    if (faceConfidences > 40) {
      return true; // The image is identified as a face image
    } else {
      return false; // The image is not identified as a face image
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Export the checkImage function to be used in other modules
module.exports = { checkImage };
