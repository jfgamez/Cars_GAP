import { Pipe, PipeTransform } from '@angular/core';

/**
 * Obtains the keys and values from an objetc and return them as array
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        if (!value) {
            return value;
        }

        const keys = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    }
}
