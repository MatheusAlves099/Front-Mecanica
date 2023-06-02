'use strict'

export const preencherDadosCursos = async () => {
    const url = `http://localhost:8080/v1/mecanica/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const preencherDadosTurmas = async () => {
    const url = `http://localhost:8080/v1/mecanica/turmas`
    const response = await fetch(url)
    const data = await response.json()

    return data.turma
}

export const preencherDadosProfessor = async () => {
    const url = `http://localhost:8080/v1/mecanica/professor`
    const response = await fetch(url)
    const data = await response.json()

    return data.professor
}

export const preencherDadosAluno = async () => {
    const url = `http://localhost:8080/v1/mecanica/aluno`
    const response = await fetch(url)
    const data = await response.json()

    return data.aluno
}