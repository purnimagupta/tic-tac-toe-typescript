interface validationResult {
    isValidBoard: boolean;
    error?:string;
}

export function validateInput(minSize: number, maxSize: number, boardInput: string): validationResult {
    if(boardInput && Number(boardInput)) {
        const boardSize = parseInt(boardInput);
        if(minSize <= boardSize && boardSize <= maxSize) {
            return {
                isValidBoard: true,
                error: ''
            }
        } else if(boardSize <= minSize) {
            return {
                isValidBoard: false,
                error: `Board size can't be less than ${minSize}`
            }
        } else {
            return {
                isValidBoard: false,
                error: `Board size can't be greator than ${maxSize}`
            }
        }
    } else {
        return {
            isValidBoard: false,
            error: `Board size can't be empty`
        }
    }
}   