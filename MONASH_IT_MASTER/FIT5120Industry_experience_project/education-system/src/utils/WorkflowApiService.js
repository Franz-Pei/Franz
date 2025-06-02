// src/utils/WorkflowApiService.js

/**
 * Service for interacting with the workflow API
 */
export default {
    /**
     * Run a workflow with the provided input
     * @param {string} apiUrl - The workflow API endpoint URL
     * @param {string} apiKey - The API key for authorization
     * @param {Object} inputs - The input parameters for the workflow
     * @param {string} userId - The user identifier
     * @returns {Promise} - Promise resolving to the workflow response
     */
    async runWorkflow(inputs, userId = 'user-default') {
      try {
        const response = await fetch(`https://fit5120-chatbot.sunuvproc.com/v1/workflows/run`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer app-Tps5sfKfaKaDMgC7AOBoLJtu`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            inputs: {query: inputs},
            response_mode: 'blocking',
            user: userId
          })
        });
  
        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(`API Error: ${response.status} - ${errorData ? JSON.stringify(errorData) : response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('Error calling workflow API:', error);
        throw error;
      }
    }
  };