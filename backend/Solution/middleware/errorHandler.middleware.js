import { CustomError } from "../errors/customError.js";

const targetErrorCodes = [
    "23505", // Unique violation
    "23503", // Foreign key violation
    "23502", // Not null violation
];

export const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            message: err.message,
            details: err.details,
          });
    }

    if (
        err instanceof Error &&
        err.code &&
        targetErrorCodes.includes(err.code)
    ) {
        // Handle specific PostgreSQL error codes
        switch (err.code) {
            case "23505":
                return res
                    .status(409)
                    .json({
                        message:
                            "Duplicate entry error. Please provide unique data.",
                        details: err.detail,
                    });
            case "23503":
                return res
                    .status(400)
                    .json({
                        message: "Foreign key constraint violation.",
                        details: err.detail,
                    });
            case "23502":
                return res
                    .status(400)
                    .json({
                        message: "Null value in a non-nullable field.",
                        details: err.detail,
                    });
            default:
                return res
                    .status(400)
                    .json({ message: "Database error.", details: err.detail });
        }
    }


    return res.status(500).json(err);
};
