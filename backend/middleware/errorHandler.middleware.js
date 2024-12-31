export const errorHandlerMiddleware = (
    error,
    req,
    res,
    next
) => {
    
    // if (error instanceof Error) {
    //     console.log("here");
        
    //     return res.status(400).json({
    //         // errorCode: error.errorCode,
    //         // message: error.message,
    //         message:"test"
    //     });
    // }
    console.log(error);
    
    return res.status(500).json(error);
}