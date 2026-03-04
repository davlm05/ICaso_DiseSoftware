# DUA Streamliner

**Authors:** Jose Isaac Corrales Cascante - David Lopez Murillo

**Problem Statement:**
The preparation of the Documento Único Aduanero (DUA) in Costa Rica is a complex, manual, and error-prone process that requires interpreting multiple heterogeneous source documents, including Excel files, Word documents, PDFs, and scanned images. Each supplier or company uses different formats and structures, making data extraction highly dependent on expert knowledge and increasing the risk of inconsistencies, omissions, delays, penalties, or rejection by customs authorities. The lack of standardisation and the need for contextual interpretation of customs terminology significantly reduce operational efficiency and scalability for importers and exporters.

**Proposed Solution:**
The DUA Streamliner is an intelligent system designed to automate the extraction, interpretation, and mapping of relevant information from diverse document formats into the official DUA template defined by the Ministry of Finance. Using multi-format document processing, OCR, and AI-based semantic analysis, the system identifies key customs data through contextual understanding rather than simple keyword matching. It then validates data consistency, maps the extracted information into the correct DUA fields, and generates a pre-filled Word document with confidence indicators, transforming the customs expert’s role from manual data entry to strategic validation and oversight.

# 1. Frontend Design

## 1.1 Technology stack:
### Frontend technology, security, third-party libraries, frameworks, and hosting; all with their respective versions.

- Aplication Type: Web App
- Web Framework: Angular v21.0.0
- Web Server: IIS 10 (Azure App Service Windows)
- TypeScript v5.9.3
- NodeJS v22
- ESLint v9.5.0
- Prettier v3.3.3
- SonarCloud v5.0.1
- Azure Application Insights SDK v3.3.1
- Unit Testing: Jest 30.2.0
- Data Validation Framework: Angular Reactive Forms Validators + Zod v3.23.8
- Integration Testing: Playwright v1.58.2
- Cloud Service: Azure Cloud Service
- Hosted By: Microsoft Azure – Azure App Service
- Code Repositories: Azure DevOps
- Code Automation Task Tool: npm scripts (NodeJS v22)
- CI/CD Pipelines Technology: Azure DevOps Pipelines (YAML)
- Environments: dev, staging, production
- Environment Deployments Tools: Azure DevOps Pipelines - Azure App Service Deploy task

## 1.2 UX UI analysis:
### Includes the desirable usability attributes of the application, a preliminary UX design in the form of wireframes, and evidence from UX testing with real users that validates the preliminary design.

## 1.3 Component design strategy:
### Defines the technique and principles for frontend component design, how component reusability is achieved, how styles are centralised, and how branding, internationalisation, and responsiveness are implemented.

## 1.4 Security:
### Technologies, techniques, and classes—along with their respective locations in the project structure—responsible for authentication, authorisation, permissions, and session management.

## 1.5 Layered design:
### Design and explanation of the different layers of the frontend application.

## 1.6  Design patterns:
### Class design and their respective locations in the project structure where object-oriented design patterns are applied, such as: security, UI refresh, notification handling, state storage, API calls, asynchronous operations, session invalidation, event-driven programming, and object creation.
