import {AbstractCustomInput} from "./abstractions/AbstractCustomInput"

export class CustomInputsHub{
    protected inner: Array<AbstractCustomInput>;

    private constructor(){ this.inner = [] as Array<AbstractCustomInput>; }

    public add(customInput: AbstractCustomInput): CustomInputsHub{
        this.inner.push(customInput);
        return this;
    }

    public addAll(customInputs: Array<AbstractCustomInput>): CustomInputsHub{
        customInputs.forEach(this.add.bind(this));
        return this;
    }

    public mapAndAdd(elem: Array<any>, mapper: Function): CustomInputsHub{
        return this.add( mapper(elem) );
    }

    public mapAndAddAll(elems: Array<any>, mapper: Function): CustomInputsHub{
        elems.map((<any>mapper)).forEach(this.add.bind(this));
        return this;
    }

    protected static instance ?: CustomInputsHub = null;
    public static getInstance(): CustomInputsHub{
        if(CustomInputsHub.instance === null)
            CustomInputsHub.instance = new CustomInputsHub();

        return CustomInputsHub.instance;
    }
}