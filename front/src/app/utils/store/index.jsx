import create from "zustand"
export const useTurnStore = create((set) => ({
    turn: [{
        calle: "Bartolomé Mitre 2553, CABA",
        centroMedico: "Sanatorio de la Trinidad - Mitre",
        day: ['Vie', 1],
        especialidad:"Cirugía General",
        isSelectDoctor:"Valeria Montes",
        isSelectHorario: "10:20 hs"}],
    set
}))