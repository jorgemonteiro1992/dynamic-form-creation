/**
 * Performs a GET request to the specified API endpoint and returns the response data.
 *
 * @param {Object} options - An object containing the request configuration.
 * @param {string} options.endpoint - The endpoint to fetch the data from.
 * @returns {Promise<any>} A Promise that resolves with the parsed JSON response data.
 */

interface getArgs {
    endpoint: string
}

const get = async ({ endpoint }: getArgs ): Promise<any> => {
    const response = await fetch( endpoint ); // Sends GET request

    const data = await response.json(); // Parse the response data as JSON

    return data;
};

export { get };