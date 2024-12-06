function generateUnits() {
    const container = document.getElementById("dynamic-fields");
    container.innerHTML = ""; 

    const totalUnidades = document.getElementById("totalUnidades").value;

    for (let i = 1; i <= totalUnidades; i++) {
        const unitSection = document.createElement("div");
        unitSection.classList.add("dynamic-section");

        const title = document.createElement("h3");
        title.textContent = `Informe os detalhes da Unidade ${i}`;
        unitSection.appendChild(title);

        const fields = [
            { label: "Unidade", type: "text", name: `unidade${i}` },
            { label: "CH do semestre", type: "text", name: `chSemestre${i}` },
            { label: "Começo do período", type: "text", name: `inicioPeriodo${i}` },
            { label: "Término do período", type: "text", name: `fimPeriodo${i}` },
            { label: "Título da unidade", type: "text", name: `tituloUnidade${i}` },
        ];

        fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;
            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            unitSection.appendChild(label);
            unitSection.appendChild(input);
        });

        const labelDescricao = document.createElement("label");
        labelDescricao.textContent = "Descrição do conteúdo da unidade";
        const textarea = document.createElement("textarea");
        textarea.name = `descricaoUnidade${i}`;
        textarea.rows = 4;
        unitSection.appendChild(labelDescricao);
        unitSection.appendChild(textarea);

        const labelEncontros = document.createElement("label");
        labelEncontros.textContent = "Informe o total de encontros presenciais e síncronos da unidade";
        const encontrosSelect = document.createElement("select");
        encontrosSelect.name = `totalEncontros${i}`;
        encontrosSelect.id = `totalEncontros${i}`;
        encontrosSelect.innerHTML = `
            <option value="0">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        `;
        encontrosSelect.onchange = function() { generateEncontros(i, encontrosSelect.value); };
        unitSection.appendChild(labelEncontros);
        unitSection.appendChild(encontrosSelect);

        const encontrosContainer = document.createElement("div");
        encontrosContainer.classList.add("encontros-container");
        unitSection.appendChild(encontrosContainer);

        const activitiesLabel = document.createElement("label");
        activitiesLabel.textContent = "Informe o total de ativivdades da unidade";
        const activitiesSelect = document.createElement("select");
        activitiesSelect.name = `atividadesUnidade${i}`;
        activitiesSelect.id = `atividadesUnidade${i}`;
        activitiesSelect.innerHTML = `
            <option value="0">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        `;
        activitiesSelect.onchange = function() {
            generateActivities(i, activitiesSelect.value);
        };

        unitSection.appendChild(activitiesLabel);
        unitSection.appendChild(activitiesSelect);

        const activitiesContainer = document.createElement("div");
        activitiesContainer.classList.add("activities-container");
        unitSection.appendChild(activitiesContainer);

        container.appendChild(unitSection);
    }
}

function generateEncontros(unitNumber, numEncontros) {
    const unitSection = document.querySelector(`#dynamic-fields .dynamic-section:nth-child(${unitNumber})`);
    let encontrosContainer = unitSection.querySelector(".encontros-container");

    encontrosContainer.innerHTML = "";

    for (let i = 1; i <= numEncontros; i++) {
        const encontroSection = document.createElement("div");
        encontroSection.classList.add("dynamic-section");

        const title = document.createElement("h3");
        title.textContent = `Informe os detalhes do encontro ${i}`;
        encontroSection.appendChild(title);

        const encontroFields = [
            { label: "Qual será o encontro?", type: "select", name: `encontroTipo${unitNumber}_${i}`, options: ["Selecione", "Síncrono", "Presencial"] },
            { label: "Data", type: "date", name: `dataEncontro${unitNumber}_${i}` },
            { label: "CH do encontro", type: "text", name: `chEncontro${unitNumber}_${i}` },
            { label: "Começo da aula", type: "time", name: `inicioAula${unitNumber}_${i}` },
            { label: "Término da aula", type: "time", name: `fimAula${unitNumber}_${i}` },
            { label: "Frequência", type: "select", name: `frequenciaEncontro${unitNumber}_${i}`, options: ["Selecione", "Sim", "Não"] },
        ];

        encontroFields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;
            let input;

            if (field.type === "select") {
                input = document.createElement("select");
                field.options.forEach(option => {
                    const optionElement = document.createElement("option");
                    optionElement.value = option;
                    optionElement.textContent = option;
                    input.appendChild(optionElement);
                });
            } else {
                input = document.createElement("input");
                input.type = field.type;
            }

            input.name = field.name;
            encontroSection.appendChild(label);
            encontroSection.appendChild(input);
        });

        const labelDescricao = document.createElement("label");
        labelDescricao.textContent = "Descrição/Enunciado";
        const textarea = document.createElement("textarea");
        textarea.name = `descricaoEncontro${unitNumber}_${i}`;
        textarea.rows = 4;
        encontroSection.appendChild(labelDescricao);
        encontroSection.appendChild(textarea);

        encontrosContainer.appendChild(encontroSection);
    }
}

function generateActivities(unitNumber, numActivities) {
    const unitSection = document.querySelector(`#dynamic-fields .dynamic-section:nth-child(${unitNumber})`);
    let activitiesContainer = unitSection.querySelector(".activities-container");

    activitiesContainer.innerHTML = "";  

    for (let i = 1; i <= numActivities; i++) {
        const activitySection = document.createElement("div");
        activitySection.classList.add("dynamic-section");

        const title = document.createElement("h3");
        title.textContent = `Informe os detalhes da Atividade ${i}`;
        activitySection.appendChild(title);

        const activityFields = [
            { label: "Qual é a atividade", type: "select", name: `atividadeTipo${unitNumber}_${i}`, options: ["Selecione", "Wiki", "Fórum", "Tarefa", "Quiz", "Glossário"] },
            { label: "CH da atividade", type: "text", name: `chAtividade${unitNumber}_${i}` },
            { label: "Peso", type: "number", name: `pesoAtividade${unitNumber}_${i}`, min: 0 },
            { label: "Avaliação", type: "select", name: `avaliacaoAtividade${unitNumber}_${i}`, options: ["Selecione", "Sem nota", "Nota média"] },
            { label: "Frequência", type: "select", name: `frequenciaAtividade${unitNumber}_${i}`, options: ["Selecione", "Sim", "Não"] },
            { label: "Título da atividade", type: "text", name: `tituloAtividade${unitNumber}_${i}` },
        ];

        activityFields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;
            let input;
            if (field.type === "select") {
                input = document.createElement("select");
                input.name = field.name;
                field.options.forEach(option => {
                    const optionElement = document.createElement("option");
                    optionElement.textContent = option;
                    optionElement.value = option;
                    input.appendChild(optionElement);
                });
            } else {
                input = document.createElement("input");
                input.type = field.type;
                input.name = field.name;
                if (field.min) input.min = field.min;
            }

            activitySection.appendChild(label);
            activitySection.appendChild(input);
        });

        const labelDescricao = document.createElement("label");
        labelDescricao.textContent = "Descrição/Enunciado";
        const textarea = document.createElement("textarea");
        textarea.name = `descricaoAtividade${unitNumber}_${i}`;
        textarea.rows = 4;
        activitySection.appendChild(labelDescricao);
        activitySection.appendChild(textarea);

        activitiesContainer.appendChild(activitySection);
    }
}

document.getElementById("salvarDados").addEventListener("click", function() {
    const formData = {};

    formData.curso = document.getElementById("curso").value;
    formData.disciplina = document.getElementById("disciplina").value;
    formData.semestre = document.getElementById("semestre").value;
    formData.periodoPlanejamento = document.getElementById("periodoPlanejamento").value;
    formData.periodoOferta = document.getElementById("periodoOferta").value;
    formData.formatoOferta = document.getElementById("formatoOferta").value;
    formData.professor = document.getElementById("professor").value;
    formData.modeloFoto = document.querySelector('input[name="modeloFoto"]:checked')?.value;
    formData.comentario = document.getElementById("comentario").value;
    formData.cargaTotal = document.getElementById("cargaTotal").value;
    formData.cargaDistancia = document.getElementById("cargaDistancia").value;
    formData.cargaSincrona = document.getElementById("cargaSincrona").value;
    formData.cargaAssincrona = document.getElementById("cargaAssincrona").value;
    formData.cargaPresencial = document.getElementById("cargaPresencial").value;
    formData.totalUnidades = document.getElementById("totalUnidades").value;

    const unidades = [];
    const totalUnidades = document.getElementById("totalUnidades").value;
    
    for (let i = 1; i <= totalUnidades; i++) {
        const unidade = {
            unidade: document.querySelector(`[name="unidade${i}"]`).value,
            chSemestre: document.querySelector(`[name="chSemestre${i}"]`).value,
            inicioPeriodo: document.querySelector(`[name="inicioPeriodo${i}"]`).value,
            fimPeriodo: document.querySelector(`[name="fimPeriodo${i}"]`).value,
            tituloUnidade: document.querySelector(`[name="tituloUnidade${i}"]`).value,
            descricaoUnidade: document.querySelector(`[name="descricaoUnidade${i}"]`).value,
            totalEncontros: document.querySelector(`[name="totalEncontros${i}"]`)?.value,
            totalAtividades: document.querySelector(`[name="atividadesUnidade${i}"]`)?.value
        };

        const encontros = [];
        const totalEncontros = unidade.totalEncontros;
        if (totalEncontros) {
            for (let j = 1; j <= totalEncontros; j++) {
                const encontro = {
                    encontroTipo: document.querySelector(`[name="encontroTipo${i}_${j}"]`)?.value,
                    dataEncontro: document.querySelector(`[name="dataEncontro${i}_${j}"]`)?.value,
                    chEncontro: document.querySelector(`[name="chEncontro${i}_${j}"]`)?.value,
                    inicioAula: document.querySelector(`[name="inicioAula${i}_${j}"]`)?.value,
                    fimAula: document.querySelector(`[name="fimAula${i}_${j}"]`)?.value,
                    frequenciaEncontro: document.querySelector(`[name="frequenciaEncontro${i}_${j}"]`)?.value,
                    descricaoEncontro: document.querySelector(`[name="descricaoEncontro${i}_${j}"]`)?.value,
                };
                encontros.push(encontro);
            }
        }
        unidade.encontros = encontros;

        const atividades = [];
        const totalAtividades = unidade.totalAtividades;
        if (totalAtividades) {
            for (let k = 1; k <= totalAtividades; k++) {
                const atividade = {
                    atividadeTipo: document.querySelector(`[name="atividadeTipo${i}_${k}"]`)?.value,
                    chAtividade: document.querySelector(`[name="chAtividade${i}_${k}"]`)?.value,
                    pesoAtividade: document.querySelector(`[name="pesoAtividade${i}_${k}"]`)?.value,
                    avaliacaoAtividade: document.querySelector(`[name="avaliacaoAtividade${i}_${k}"]`)?.value,
                    frequenciaAtividade: document.querySelector(`[name="frequenciaAtividade${i}_${k}"]`)?.value,
                    tituloAtividade: document.querySelector(`[name="tituloAtividade${i}_${k}"]`)?.value,
                    descricaoAtividade: document.querySelector(`[name="descricaoAtividade${i}_${k}"]`)?.value,
                };
                atividades.push(atividade);
            }
        }
        unidade.atividades = atividades;

        unidades.push(unidade);
    }

    formData.unidades = unidades;

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Dados salvos com sucesso!");
});

function carregarDados() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        document.getElementById("curso").value = formData.curso;
        document.getElementById("disciplina").value = formData.disciplina;
        document.getElementById("semestre").value = formData.semestre;
        document.getElementById("periodoPlanejamento").value = formData.periodoPlanejamento;
        document.getElementById("periodoOferta").value = formData.periodoOferta;
        document.getElementById("formatoOferta").value = formData.formatoOferta;
        document.getElementById("professor").value = formData.professor;
        if (formData.modeloFoto) {
            document.querySelector(`input[name="modeloFoto"][value="${formData.modeloFoto}"]`).checked = true;
        }
        document.getElementById("comentario").value = formData.comentario;
        document.getElementById("cargaTotal").value = formData.cargaTotal;
        document.getElementById("cargaDistancia").value = formData.cargaDistancia;
        document.getElementById("cargaSincrona").value = formData.cargaSincrona;
        document.getElementById("cargaAssincrona").value = formData.cargaAssincrona;
        document.getElementById("cargaPresencial").value = formData.cargaPresencial;
        document.getElementById("totalUnidades").value = formData.totalUnidades;

        formData.unidades.forEach((unidade, i) => {
            document.querySelector(`[name="unidade${i + 1}"]`).value = unidade.unidade;
            document.querySelector(`[name="chSemestre${i + 1}"]`).value = unidade.chSemestre;
            document.querySelector(`[name="inicioPeriodo${i + 1}"]`).value = unidade.inicioPeriodo;
            document.querySelector(`[name="fimPeriodo${i + 1}"]`).value = unidade.fimPeriodo;
            document.querySelector(`[name="tituloUnidade${i + 1}"]`).value = unidade.tituloUnidade;
            document.querySelector(`[name="descricaoUnidade${i + 1}"]`).value = unidade.descricaoUnidade;

            unidade.encontros.forEach((encontro, j) => {
                document.querySelector(`[name="encontroTipo${i + 1}_${j + 1}"]`).value = encontro.encontroTipo;
                document.querySelector(`[name="dataEncontro${i + 1}_${j + 1}"]`).value = encontro.dataEncontro;
                document.querySelector(`[name="chEncontro${i + 1}_${j + 1}"]`).value = encontro.chEncontro;
                document.querySelector(`[name="inicioAula${i + 1}_${j + 1}"]`).value = encontro.inicioAula;
                document.querySelector(`[name="fimAula${i + 1}_${j + 1}"]`).value = encontro.fimAula;
                document.querySelector(`[name="frequenciaEncontro${i + 1}_${j + 1}"]`).value = encontro.frequenciaEncontro;
                document.querySelector(`[name="descricaoEncontro${i + 1}_${j + 1}"]`).value = encontro.descricaoEncontro;
            });

            unidade.atividades.forEach((atividade, k) => {
                document.querySelector(`[name="atividadeTipo${i + 1}_${k + 1}"]`).value = atividade.atividadeTipo;
                document.querySelector(`[name="chAtividade${i + 1}_${k + 1}"]`).value = atividade.chAtividade;
                document.querySelector(`[name="pesoAtividade${i + 1}_${k + 1}"]`).value = atividade.pesoAtividade;
                document.querySelector(`[name="avaliacaoAtividade${i + 1}_${k + 1}"]`).value = atividade.avaliacaoAtividade;
                document.querySelector(`[name="frequenciaAtividade${i + 1}_${k + 1}"]`).value = atividade.frequenciaAtividade;
                document.querySelector(`[name="tituloAtividade${i + 1}_${k + 1}"]`).value = atividade.tituloAtividade;
                document.querySelector(`[name="descricaoAtividade${i + 1}_${k + 1}"]`).value = atividade.descricaoAtividade;
            });
        });
    }
}


window.onload = carregarDados;
