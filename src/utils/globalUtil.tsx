export class GlobalUtil {
    public static stringIsNullOrEmpty(str: string): boolean {
        return (str === undefined || str === null || str === "")
    }
}