const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('Sample test...', () => {});

describe('project-2', () => {
    describe('getBiggest', () => {
        it('Should return Nan when given a non-numeric value.', () => {
            expect(funcs.getBiggest(0, 10)).toBe(10);
            expect(funcs.getBiggest(10, 10)).toBe(10);
        });
    
        it('Should return the biggest number.', () => {});
    });    
});

describe('project-2', () => {
    describe('getBiggest', () => {
        it('Should return Nan when given a non-numeric value.', () => {
            expect(funcs.getBiggest(0, 10)).toBe(10);
            expect(funcs.getBiggest(10, 10)).toBe(10);
        });
    
        it('Should return the biggest number.', () => {});
    });
});

describe('project-2', () => {
    describe('greeting', () => {
        it('Should return greeting according to language.', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        });
    
        it('Should return default greeting if language is unspecified.', () => {
            expect(funcs.greeting('Default')).toBe('Hello!');
        });
    });    
});

describe('project-2', () => {
    describe('isTenOrFive', () => {
        it('Should return true if the given number is 10.', () => {
            expect(funcs.isTenOrFive(10)).toBeTruthy();
            expect(funcs.isTenOrFive(5)).toBeTruthy();
        });
    
        it('Should return false if the given number is neither 10 nor 5.', () => {
            expect(funcs.isTenOrFive(9)).toBeFalsy();
            expect(funcs.isTenOrFive(4)).toBeFalsy();
        });
    });    
});

describe('project-2', () => {
    describe('isInRange', () => {
        it('Should return true if the given number is greater than 20 and less than 50.', () => {
            expect(funcs.isInRange(21)).toBeTruthy();
            expect(funcs.isInRange(49)).toBeTruthy();
        });
    
        it('Should return false if the given number is less than 20 and/or greater than 50.', () => {
            expect(funcs.isInRange(19)).toBeFalsy();
            expect(funcs.isInRange(51)).toBeFalsy();
        });
    });    
});

describe('project-2', () => {
    describe('isInteger', () => {
        it('Should return true if the given number is an integer.', () => {
            expect(funcs.isInteger(1)).toBeTruthy();
            expect(funcs.isInteger(2)).toBeTruthy();
        });
    
        it('Should return false if the given number is not an integer.', () => {
            expect(funcs.isInteger(0.1)).toBeFalsy();
            expect(funcs.isInteger(1.1)).toBeFalsy();
        });
    });
});

describe('project-2', () => {
    describe('fizzBuzz', () => {
        it('Should return "fizzbuzz" if the given number is divisible by 5 and 3.', () => {
            expect(funcs.fizzBuzz(30)).toBeTruthy();
            expect(funcs.fizzBuzz(60)).toBeTruthy();
            expect(funcs.fizzBuzz(90)).toBeTruthy();
        });
    
        it('Should return "buzz" if the given number is divisible by 5.', () => {
            expect(funcs.fizzBuzz(5)).toBeTruthy();
            expect(funcs.fizzBuzz(10)).toBeTruthy();
            expect(funcs.fizzBuzz(15)).toBeTruthy();
        });
    
        it('Should return "fizz" if the given number is divisible by 3.', () => {
            expect(funcs.fizzBuzz(3)).toBeTruthy();
            expect(funcs.fizzBuzz(6)).toBeTruthy();
            expect(funcs.fizzBuzz(9)).toBeTruthy();
        });
    });    
});

describe('project-2', () => {
    describe('isPrime', () => {
        it('Should return false if the given number is less than 0.', () => {
            expect(funcs.isPrime(-1)).toBeFalsy();
            expect(funcs.isPrime(-2)).toBeFalsy();
        });
    
        it('Should return false if the given number is equal to 1 or 0.', () => {
            expect(funcs.isPrime(1)).toBeFalsy();
            expect(funcs.isPrime(0)).toBeFalsy();
        });
    
        it('Should return false if the given number if divisible by looped item.', () => {
            expect(funcs.fizzBuzz()).toBeFalsy();
            expect(funcs.fizzBuzz()).toBeFalsy();
        });
    });    
});

describe('project-2', () => {
    describe('returnFirst', () => {
        it('Should return first item in the given array.', () => {
            expect(funcs.returnFirst([{ key: 'value' }, 1, 2, 3])).toEqual({ key: 'value' });
            expect(funcs.returnFirst([ 3, 8, 4, 2, 9 ])).toBe(3);
            expect(funcs.returnFirst([ 'Darci', 'Elizabeth' ])).toBe('Darci');
        })
        it('Should return the given value if it is not an array.', () => {
            expect(funcs.returnFirst(['4'])).toBe('4');
            expect(funcs.returnFirst(['Luke'])).toBe('Luke');
            expect(funcs.returnFirst(['Lizzy'])).toBe('Lizzy');
        })
    });    
});

describe('project-2', () => {
    describe('returnLast', () => {
        it('Should return last item in the given array.', () => {
            expect(funcs.returnLast([ 3, 8, 4, 2, 9 ])).toBe(9);
            expect(funcs.returnLast([ 'Darci', 'Elizabeth' ])).toBe('Elizabeth');
            expect(funcs.returnLast([ 'One', 'Two', 'Three' ])).toBe('Three');
        })
        it('Should return the given value if it is not an array.', () => {
            expect(funcs.returnLast(['20'])).toBe('20');
            expect(funcs.returnLast(['Emmanuelle'])).toBe('Emmanuelle');
            expect(funcs.returnLast(['X'])).toBe('X');
        })
    });    
});

describe('project-2', () => {
    describe('getArrayLength', () => {
        it('Should return length of the given array.', () => {
            expect(funcs.getArrayLength(['3', '8', '4'])).toBe(3);
            expect(funcs.getArrayLength(['Luke', 'Elizabeth', 'Emmanuelle'])).toBe(3);
            expect(funcs.getArrayLength(['Ocean'])).toBe(1);
        })
    });    
});

describe('project-2', () => {
    describe('incrementByOne', () => {
        it('Should return given array with each of its items incremented by 1.', () => {
            expect(funcs.incrementByOne([3, 6, 9])).toEqual([4, 7, 10]);
        });
    });
})

describe('project-2', () => {
    describe('wordsToSentence', () => {
        it('Should combine given words to form one sentence.', () => {
            expect(funcs.wordsToSentence(['I love', 'you.'])).toBe('I love you.');
        });
    });
})

describe('project-2', () => {
    describe('contains', () => {
        it('Should return true if itemCounter is greater than zero. Otherwise, return false.', () => {
            expect(funcs.contains([1, 2, 3], 1)).toBeTruthy();
            expect(funcs.contains([1, 2, 3], 0)).toBeFalsy();
        });
    });
})