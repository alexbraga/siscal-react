import React from "react";
import MainLayout from "../components/MainLayout";
import "./styles.css";

function About() {
  return (
    <MainLayout className="main-container">
      <div className="about custom-container">
        <h1>O que é a Compensação Ambiental?</h1>
        <p>
          O licenciamento ambiental é um dos mais importantes instrumentos da
          Política Nacional de Meio Ambiente. Por isso, todo empreendimento ou
          atividade que sejam considerados como causadores de significativo
          impacto ambiental, estão sujeitos ao licenciamento ambiental.
        </p>

        <p>
          No processo do licenciamento, a lei determina que a sociedade e o meio
          ambiente sejam compensados em razão da implantação dos empreendimentos
          que vão causar impactos ambientais.
        </p>

        <p>
          A compensação ambiental é uma medida estabelecida em razão do
          licenciamento ambiental. São compensados os impactos aos recursos
          naturais considerados negativos, que não possam ser mitigados, que
          tenham sido identificados nos estudos ambientais realizados e que
          sejam considerados significativos.
        </p>
      </div>
      <br />
      <div className="links">
        <p>
          <strong>Lista de normas sobre a compensação:</strong>
        </p>
        <p>
          <a
            href="http://www.planalto.gov.br/ccivil_03/leis/l9985.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lei Federal nº 9.985, de 2000 (art. 36)
          </a>
        </p>
        <p>
          <a
            href="http://www.planalto.gov.br/ccivil_03/decreto/2002/d4340.htm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Decreto Federal nº 4.340, de 2002
          </a>
        </p>
        <p>
          <a
            href="https://www.almg.gov.br/legislacao-mineira/texto/DEC/45175/2009/?cons=1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Decreto Estadual nº 45.175, de 2009
          </a>
        </p>
        <p>
          <a
            href="http://www.siam.mg.gov.br/sla/download.pdf?idNorma=21117"
            rel="noopener noreferrer"
            target="_blank"
          >
            Portaria IEF nº 55, de 2012
          </a>
        </p>

        <p>
          <a
            href="http://www.siam.mg.gov.br/sla/download.pdf?idNorma=52145"
            rel="noopener noreferrer"
            target="_blank"
          >
            Portaria IEF nº 77, de 2020
          </a>
        </p>
      </div>
      <br />
      <div className="how-to custom-container">
        <h1>Como usar o SISCAL</h1>
        <p>
          O SISCAL é uma ferramenta criada para permitir a realização do cálculo
          da compensação ambiental devida. Após a realização das quatro etapas,
          o Sistema calcula automaticamente o valor da compensação. A
          Compensação Ambiental é calculada conforme a fórmula a seguir:
        </p>

        <div className="formula">
          <h4>CA = (FR + FT + FA) x VR</h4>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
