function caculateAge(data_nascimento) {
    const data_nascimentoArray = data_nascimento.split("/")
    const dia_nascimento = parseInt(data_nascimentoArray[0])
    const mes_nascimento = parseInt(data_nascimentoArray[1]) - 1
    const ano_nascimento = parseInt(data_nascimentoArray[2])
    
    const hoje = new Date();
    const idade = hoje.getFullYear() - ano_nascimento;
    
    if (
      hoje.getMonth() < mes_nascimento ||
      (hoje.getMonth() === mes_nascimento && hoje.getDate() < dia_nascimento)
    ) {
      idade--;
    }
    
    return idade;
  }
  
const data_nascimento = "21/04/2002"
const idade = caculateAge(data_nascimento)
console.log(`A idade é ${idade} anos.`)

export{caculateAge}
