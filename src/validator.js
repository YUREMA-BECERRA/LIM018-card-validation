const validator = {
    isValid : function (creditCardNumber) {
        let numberCard = creditCardNumber.split("");
        let valorFinalAevalular = 0

        for ( let i = 0; i < numberCard.length; i++) {
            valorFinalAevalular += this.esParOesInpar(i, numberCard[i])
        }

        // final
        if (valorFinalAevalular % 2 == 0) {
            return true
        } else {
            return false
        }
    },
    esParOesInpar: function (position, number) {
        if (position % 2 != 0) {
            // logica inpar
            let nro = parseInt(number) * 2
            let nroArr = String(nro).split("")
            let sum = 0 
            // si el resultado de nuestra multiplicación tiene mas de 
            // dos caracteres
            if (nroArr.length > 0) {
                for (let i = 0; i < nroArr.length; i++) {
                    sum += parseInt(nroArr[i])
                }
                return sum
            }

            return nro
        } else {
            return parseInt(number)
        }
    },
    maskify: function (nroTarjetaString) {
        let enmascarado = nroTarjetaString.substr(-4)
        return enmascarado.padStart(nroTarjetaString.length - 4, "#")
    }
}
export default validator;