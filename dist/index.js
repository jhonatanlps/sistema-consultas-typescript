//Especialidade
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
};
//Médicos
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};
// Pacientes
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};
const paciente3 = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
function realizarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "realizada" });
}
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
function exibirConsulta(consulta) {
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}
function listarConsultaPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
function listarConsultaFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); //Zera horas para comparar apenas a data
    return consultas.filter((consultas) => consultas.data >= hoje);
}
function calcularFaturamento(consultas) {
    return consultas
        .filter((consulta) => consulta.status === "realizada")
        .reduce((total, consulta) => total + consulta.valor, 0);
}
//Consulta 1 - confirmada
const consulta1 = criarConsulta(1, medico1, paciente1, new Date(2026, 1, 28), 350);
const consultaConfirmada = confirmarConsulta(consulta1);
//Consulta 2 - agendada
const consulta2 = criarConsulta(2, medico3, paciente1, new Date(2026, 5, 2), 400);
//Consulta 3 - realizada
const consulta3 = criarConsulta(3, medico1, paciente3, new Date(2026, 2, 27), 300);
realizarConsulta(consulta3);
//Consulta 4 - cancelada
const consulta4 = criarConsulta(1, medico2, paciente2, new Date(2026, 8, 10), 500);
cancelarConsulta(consulta4);
//Consulta 5 - confirmada
const consulta5 = criarConsulta(1, medico3, paciente2, new Date(2026, 7, 28), 450);
confirmarConsulta(consulta5);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));
const consulta = [];

