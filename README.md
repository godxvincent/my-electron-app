# my-electron-app.

Repositorio de base para aprender de electron.

https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating


# Mapeo tipos de token github

| Classic Scope | Equivalente en Fine-grained Token | Notas | Frecuencia |
|---------------|-----------------------------------|-------|------------|
| `repo` (acceso completo a repos privados y públicos) | Repository permissions → **Contents: Read and Write**, **Issues: Read and Write**, **Pull requests: Read and Write**, **Actions: Read and Write**, etc. | En fine-grained se divide en permisos específicos; debes habilitar varios para replicar `repo`. | Común |
| `public_repo` (solo repos públicos) | Repository permissions → **Contents: Read and Write** (solo en repos públicos seleccionados) | Equivale a clonar, hacer push y abrir PRs en repos públicos. | Común |
| `repo:status` | Repository permissions → **Commit statuses: Read and Write** | Control sobre estados de commits. | Poco usual |
| `repo_deployment` | Repository permissions → **Deployments: Read and Write** | Permite gestionar despliegues. | Poco usual |
| `repo:invite` | Repository permissions → **Repository invitations: Read and Write** | Aceptar/gestionar invitaciones a repos. | Poco usual |
| `workflow` | Repository permissions → **Actions: Read and Write** | Control sobre GitHub Actions workflows. | Común |
| `read:org` | Organization permissions → **Members: Read** | Lectura de miembros de la organización. | Común |
| `write:org` | Organization permissions → **Members: Read and Write** | Gestión de miembros de la organización. | Poco usual |
| `admin:org` | Organization permissions → **Organization administration: Read and Write** | Administración completa de la organización. | Poco usual |
| `gist` | **Gists: Read and Write** | Crear y modificar gists. | Común |
| `notifications` | **Notifications: Read** | Acceso a notificaciones. | Común |
| `user` (perfil completo) | **User permissions → Profile: Read and Write** | Lectura/escritura del perfil de usuario. | Común |
| `read:user` | **User permissions → Profile: Read** | Solo lectura del perfil. | Común |
| `user:email` | **User permissions → Email addresses: Read** | Lectura de correos asociados. | Común |
| `delete_repo` | Repository permissions → **Repository administration: Delete** | Permite borrar repositorios. | Poco usual |
| `admin:enterprise` | Enterprise permissions → **Enterprise administration: Read and Write** | Administración de enterprise accounts. | Poco usual |
