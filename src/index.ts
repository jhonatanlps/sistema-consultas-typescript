import { Especialidade } from "./types/especialidade";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";

//Especialidade
const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
};

const ortopedia: Especialidade = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};

const pediatria: Especialidade = {
    id: 3,
    nome: "Pediatria",
};

//Médicos
const medico1: Medico = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};

const medico2: Medico = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};

const medico3: Medico = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};

// Pacientes
const paciente1: Paciente = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};

const paciente2: Paciente = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};

const paciente3: Paciente = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};

