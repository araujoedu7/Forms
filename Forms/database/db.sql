CREATE TABLE matriz 
( 
 id_matriz INT PRIMARY KEY AUTO_INCREMENT,  
 curso VARCHAR(n) NOT NULL,  
 disciplina VARCHAR(n) NOT NULL,  
 semestre VARCHAR(n) NOT NULL,  
 perido_planejamento DATE,  
 periodo_oferta DATE,  
 nome_professor CHAR(n),  
 composicao_nota CHAR(n),  
 descricap_disciplina VARCHAR(n),  
 ch_total INT,  
 ch_a_distancia INT,  
 ch_sincrona INT,  
 ch_assincrona INT,  
 ch_presencial INT,  
 total_unidades INT,  
); 

CREATE TABLE unidade_matriz 
( 
 idmatriz INT,  
 id_unidade INT PRIMARY KEY AUTO_INCREMENT,  
 nome_unidade VARCHAR(n) NOT NULL,  
 ch_semestre INT AUTO_INCREMENT,  
 ch_unidade INT,  
 inicio_periodo DATE,  
 termino_periodo DATE,  
 titulo_unidade CHAR(n),  
 descricao_unidade VARCHAR(n),  
 total_encontros INT,  
 total_atividades INT,  
); 

CREATE TABLE encontros_unidades 
( 
 id_encontro INT PRIMARY KEY AUTO_INCREMENT,  
 tipo_encontro CHAR(n),  
 data_encontro DATE,  
 idunidade_matriz INT,  
 ch_encontro INT,  
 inicio_aula CHAR(n),  
 termino_aula CHAR(n),  
 frequencia CHAR(n),  
); 

CREATE TABLE atividades_unidades 
( 
 id_atvidade INT PRIMARY KEY AUTO_INCREMENT,  
 tipo_atividade INT,  
 ch_atividade INT,  
 idunidade_matriz INT,  
 peso_atividade INT,  
 nota_avaliacao CHAR(n),  
 titulo_atividae CHAR(n),  
 descricao_atividade VARCHAR(n),  
); 

ALTER TABLE unidade_matriz ADD FOREIGN KEY(idmatriz) REFERENCES matriz (idmatriz)
ALTER TABLE encontros_unidades ADD FOREIGN KEY(idunidade_matriz) REFERENCES unidade_matriz (idunidade_matriz)
ALTER TABLE atividades_unidades ADD FOREIGN KEY(idunidade_matriz) REFERENCES unidade_matriz (idunidade_matriz)
