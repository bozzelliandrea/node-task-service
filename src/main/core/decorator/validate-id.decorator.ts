import "reflect-metadata";
import CastException from "../exception/cast.exception"
import ValidationException from "../exception/validation.exception"
const requiredMetadataKey = Symbol("required");

export function validateId(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value!;

    descriptor.value = function () {

        if(Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName) === null 
            || Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName) === undefined){
                throw new ValidationException("Missing required Id.");
        }

        if(!isNaN(Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName))){
            throw new CastException("The parameter is not a number type.");
        } 

        return method.apply(this, arguments);
    };
}