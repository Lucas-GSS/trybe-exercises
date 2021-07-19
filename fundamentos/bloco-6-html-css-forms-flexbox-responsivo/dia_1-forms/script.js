const select = document.querySelector('#input-estado');
function makeOptions() {
    const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
    for (let key of states) {
        const options = document.createElement('option');
        options.innerText = key;
        select.appendChild(options);
    }
}
select.addEventListener('click', makeOptions);