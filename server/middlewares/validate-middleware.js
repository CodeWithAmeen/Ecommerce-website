const validate = (schema) => async (req, res, next) => {
    try {
        // Parse and validate the request body against the provided schema
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody; // Attach the validated body to the request
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        // Define the error response details
        const status = 422; // Unprocessable Entity status
        const message = "Input validation failed. Please fill in the fields correctly.";
        const extraDetails = err.errors.map(error => error.message).join(", "); // Join all error messages
        
        const error = {
            status,
            message,
            extraDetails
        };

        console.error("Validation Error:", error); // Log the error for debugging
        res.status(status).json({ message, extraDetails }); // Send the error response
    }
};

module.exports = validate;
