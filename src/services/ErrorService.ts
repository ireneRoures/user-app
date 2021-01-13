export function parseError(errorCode: number): string {
    switch(errorCode) {
        case 400:
            return 'TR_ERROR_MSG_400'
        case 404:
            return 'TR_ERROR_MSG_404'
        default:
            return 'TR_ERROR_MSG_DEFAULT'   
    }
}