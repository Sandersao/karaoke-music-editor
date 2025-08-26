export class InputMetadata {
    private value: any = null

    constructor(value: string | Date = null) {
        if(value instanceof Date){
            this.value = value.toISOString().split('T')[0]
            return
        }
        this.value = value
    }

    val(e?: InputEvent): string {
        console.log(this.value);
        
        if (!e && !this.value && this.value !== false) {
            return null
        }
        if (!e) {
            return this.value.toString()
        }
        this.value = (e.target as HTMLInputElement).value
    }
}