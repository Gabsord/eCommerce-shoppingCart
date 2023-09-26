

function FormatCurrency(value, format){
    return value.toLocaleString('pt-br', {style: 'currency', currency: format})

}

export default FormatCurrency