/**
 * Configuración centralizada del proyecto.
 * Para rotar el webhook, solo edita este archivo.
 *
 * SEGURIDAD: En Make.com, configura el módulo Webhook para que
 * valide el encabezado "Origin" y rechace cualquier otra procedencia.
 */
const CONFIG = Object.freeze({
  webhookURL: "https://hook.us2.make.com/7dkcdupytu3b78oonmhlbo62lcv4ebkl",
  adminKey: "rDx92",
  maxCupos: 4,
  rateLimitMs: 30000,
  fetchTimeoutMs: 10000,
  securityToken: "boda-ronny-dahyana-2026"
});
