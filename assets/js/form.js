

function Validator(options) {
    var selectorRules = {}
    function validate (inputElement, rule) {
        var errorMessage
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var rules = selectorRules[rule.selector]
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break
        }


        if (errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } else{
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage
    }
   var formElement = document.querySelector(options.form)   
    if (formElement){
        formElement.onsubmit = function(e) {
            e.preventDefault()
            var isFormValid = true
            

            
// validate trước khi submit
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })
            
         if (isFormValid) {
            if (typeof options.onSubmit === 'function'){
                var enableInputs = formElement.querySelectorAll('[name]')
                var formValues = Array.from(enableInputs).reduce(function(values, input){
                return (values[input.name] = input.value) && values
            },{})
                options.onSubmit(formValues)
            }
         }
        }


        options.rules.forEach(function(rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)
           
            if (inputElement) {
                inputElement.onblur = function() {
                   validate(inputElement, rule) 
                }
            }
        inputElement.oninput = function(){
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
         }
        )
    }
    }




// set rules
Validator.isEmail = function(selector, message) {
    return {
        selector : selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Please enter your email'
        }
    }
}
Validator.isRequired = function(selector, message) {
    return {
        selector : selector,
        test: function(value) {
            return value.trim() ? undefined : message || "Please Enter this blank"
        }
    }
}
Validator.isPassword = function(selector, message) {
    return {
        selector : selector,
        test: function(value) {
            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
            return regex.test(value) ? undefined : message || 'Password containing at least 8 Characters, 1 Number, 1 upper and 1 lower case'
        }
    }
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {             
            return value === getConfirmValue() ? undefined : message || 'Please confirm your Password'
        }
    }        
}
