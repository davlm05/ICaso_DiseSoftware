**# DUA Streamliner

**Authors:** Jose Isaac Corrales Cascante - David Lopez Murillo

**Problem Statement:**
Preparing the Documento Único Aduanero (DUA) in Costa Rica is still a manual, time-consuming, and error-prone process for importers and exporters. The required information is distributed across heterogeneous source files such as Excel, Word, PDF, and scanned images, usually with different structures per supplier or company. Because of this variability, customs specialists must spend significant effort consolidating, interpreting, validating, and transcribing data into the official DUA format, increasing the risk of inconsistencies, omissions, delays, penalties, or rejection by customs authorities.

**Proposed Solution:**
DUA Streamliner proposes an automated workflow where the user provides only a folder path containing source documents (.xlsx, .docx, .pdf, and scanned images). The system performs multi-format reading, OCR, and AI-driven semantic extraction adapted to customs terminology, then maps detected data to the official DUA template defined by the Ministerio de Hacienda. It applies basic consistency checks (for example, totals, currency coherence, and date consistency), assigns confidence levels, and flags ambiguous fields for mandatory expert review. The output is a pre-filled DUA Word document with visual confidence indicators, designed to reduce repetitive manual work while keeping the customs specialist as the final decision-maker for validation and compliance.

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
- Hosted By: Microsoft Azure - Azure App Service
- Code Repositories: Azure DevOps
- Code Automation Task Tool: npm scripts (NodeJS v22)
- CI/CD Pipelines Technology: Azure DevOps Pipelines (YAML)
- Environments: dev, staging, production
- Environment Deployments Tools: Azure DevOps Pipelines - Azure App Service Deploy task

## 1.2 UX UI analysis:
### Core business process
Describir paso a paso lo que sucede en cada pantalla en términos de acciones (no hablen de botones, ni listas ni de ningún componente visual, solo acciones de usuario y el resultado de cada acción)

#### Login
1. El usuario ingresa su identificador de cuenta y su password.
2. El sistema valida que los datos tengan formato correcto y que no falten campos requeridos.
3. El usuario ingresa el one time token para completar la autenticación de dos factores.
4. Si las credenciales o el token son inválidos, el sistema rechaza el intento y muestra un mensaje de autenticación inválida.
5. Si la autenticación es válida, el sistema crea la sesión del usuario y aplica permisos según el rol asignado.
6. El usuario es redirigido a la pantalla de configuración del generador para iniciar el proceso de carga.

#### Configurar el generador
1. El usuario indica la ruta de la carpeta que contiene los documentos fuente del caso.
2. El sistema verifica que la ruta exista y que sea accesible para lectura.
3. El sistema identifica y lista los archivos compatibles encontrados en la carpeta (Excel, Word, PDF e imágenes escaneadas).
4. Si no se detectan archivos válidos, el sistema notifica la situación y solicita corregir la ruta o agregar documentos.
5. El usuario selecciona la plantilla oficial de DUA que se utilizará para el prellenado.
6. El sistema valida que la plantilla seleccionada corresponda a un formato soportado y esté íntegra.
7. El usuario confirma la configuración del proceso con carpeta de entrada y plantilla destino.
8. El sistema guarda la configuración, prepara el lote documental y habilita el inicio de la generación automatizada.

#### Monitoreo del avance
1. El usuario inicia la generación automatizada y accede a la pantalla de monitoreo del proceso.
2. El sistema registra el inicio del lote y cambia su estado a en progreso.
3. El sistema actualiza continuamente el avance por etapa (lectura, OCR, extracción semántica, mapeo y validaciones básicas).
4. El usuario consulta el progreso global del lote y el estado individual de cada documento procesado.
5. Si se detectan inconsistencias o baja confianza, el sistema marca observaciones para revisión sin detener el procesamiento total.
6. Si ocurre un error en un documento, el sistema registra la causa y mantiene trazabilidad para corregir y reintentar.
7. Al finalizar, el sistema cambia el estado a completado o completado con observaciones y habilita la etapa de revisión final.

#### Obtención del resultado / exportar
1. El usuario accede al resultado del lote una vez que el proceso termina.
2. El sistema presenta el DUA prellenado junto con los campos marcados por nivel de confianza.
3. El usuario revisa y corrige los campos observados antes de aprobar el documento final.
4. El sistema ejecuta una validación final de coherencia básica sobre los datos consolidados.
5. Si la validación final es satisfactoria, el usuario exporta el DUA en formato Word (.docx).
6. El sistema registra la exportación y conserva el historial del proceso para auditoría y trazabilidad.

#### Logout
1. El usuario decide cerrar su sesión cuando finaliza su revisión o exportación.
2. El sistema invalida la sesión activa y elimina tokens temporales de autenticación.
3. El sistema registra el cierre de sesión en la bitácora de auditoría.
4. El usuario es redirigido al flujo de autenticación para un nuevo acceso.

### Wireframes
#### Screen 1 - Login
**Propósito:** Permitir que el usuario se autentique de forma segura con credenciales y token de un solo uso para habilitar acceso al sistema.

**Prompt:**
```text
Diseña un wireframe low-fidelity de una pantalla web desktop (1440x900) para DUA Streamliner. Estilo monocromático, limpio, sin branding final. Mostrar flujo de autenticación con ingreso de identificador de cuenta, password y token OTP, incluyendo validación de campos requeridos, estado de error por autenticación inválida y estado exitoso que redirige a Configurar el generador. Solo wireframe, no mockup realista.
```
**Imagen:**  
![Wireframe 1](media/wireframe1.png)

#### Screen 2 - Configurar el generador
**Propósito:** Permitir que el usuario defina la carpeta de entrada y la plantilla oficial DUA antes de iniciar el procesamiento.

**Prompt:**
```text
Crea un wireframe low-fidelity desktop (1440x900) para la pantalla Configurar el generador de DUA Streamliner. Mostrar flujo para ingresar ruta de carpeta, validar acceso, detectar y listar archivos compatibles (Excel, Word, PDF e imágenes), manejar caso sin archivos válidos, seleccionar plantilla oficial DUA, validar integridad de plantilla y confirmar configuración para iniciar la generación automatizada. Estilo grayscale, UX clara, solo wireframe.
```
**Imagen:**  
![Wireframe 2](media/wireframe2.png)

#### Screen 3 - Monitoreo del avance
**Propósito:** Permitir seguimiento en tiempo real del lote de documentos, con visibilidad de progreso, errores y observaciones.

**Prompt:**
```text
Genera un wireframe low-fidelity desktop (1440x900) para la pantalla Monitoreo del avance de DUA Streamliner. Incluir estado general del lote, avance por etapas (lectura, OCR, extracción semántica, mapeo y validaciones), estado por documento, registro de errores con causa y observaciones por baja confianza, mostrando estados finales completado o completado con observaciones. Enfoque en trazabilidad y control del proceso. Solo wireframe.
```
**Imagen:**  
![Wireframe 3](media/wireframe3.png)

#### Screen 4 - Obtención del resultado / exportar
**Propósito:** Permitir revisión final del DUA prellenado, validación de campos observados y exportación del documento.

**Prompt:**
```text
Diseña un wireframe low-fidelity desktop (1440x900) para la pantalla Obtención del resultado / exportar de DUA Streamliner. Mostrar el DUA prellenado, campos marcados por nivel de confianza, flujo de revisión y corrección de observaciones, validación final de coherencia y acción para exportar a Word (.docx), incluyendo registro de exportación para auditoría. Estilo monocromático, claro y orientado a tareas. Solo wireframe.
```
**Imagen:**  
![Wireframe 4](media/wireframe4.png)

#### Screen 5 - Logout
**Propósito:** Cerrar la sesión de forma segura, dejar evidencia de auditoría y redirigir al flujo de autenticación.

**Prompt:**
```text
Crea un wireframe low-fidelity desktop (1440x900) para el flujo de Logout de DUA Streamliner. Mostrar confirmación de cierre de sesión, invalidación de sesión activa, limpieza de tokens temporales, registro en bitácora de auditoría y redirección al flujo de autenticación. Debe comunicar seguridad y cierre correcto del proceso. Solo wireframe.
```
**Imagen:**  
![Wireframe 5](media/wireframe5.png)


## 1.3 Component design strategy:
### Defines the technique and principles for frontend component design, how component reusability is achieved, how styles are centralised, and how branding, internationalisation, and responsiveness are implemented.

## 1.4 Security:
### Technologies, techniques, and classes - along with their respective locations in the project structure - responsible for authentication, authorisation, permissions, and session management.

## 1.5 Layered design:
### Design and explanation of the different layers of the frontend application.

## 1.6  Design patterns:
### Class design and their respective locations in the project structure where object-oriented design patterns are applied, such as: security, UI refresh, notification handling, state storage, API calls, asynchronous operations, session invalidation, event-driven programming, and object creation.
