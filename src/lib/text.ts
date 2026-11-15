/** Remove o trecho entre parênteses do fim do título ("O Padrão de Acessibilidade (…)" → "O Padrão de Acessibilidade"). */
export function shortTitle(title: string): string {
  return title.replace(/\s*\([^)]*\)\s*$/, "").trim() || title;
}

/** Nome do processo do Domínio de Recursos do PMBOK 8, sem o prefixo "Recursos ›". */
export function processName(domainTag: string): string {
  return domainTag.replace(/^Recursos\s*›\s*/, "");
}

/**
 * Separa o cabeçalho da mensagem do texto principal:
 * "Assunto: X. …" (e-mail), "Canal #x: '…'" (chat) e "Ticket #123 - …" (chamado).
 */
export function parseMessage(description: string): { header?: string; body: string } {
  const email = description.match(/^Assunto:\s*(.+?)\.\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/);
  if (email) return { header: email[1].trim(), body: description.slice(email[0].length).trim() };
  const chat = description.match(/^Canal\s+(#[\w-]+):\s*/);
  if (chat) {
    const body = description
      .slice(chat[0].length)
      .trim()
      .replace(/^'(.*)'\.?$/s, "$1");
    return { header: chat[1], body };
  }
  const ticket = description.match(/^Ticket\s+(#\d+)\s*-\s*/);
  if (ticket)
    return { header: `Chamado ${ticket[1]}`, body: description.slice(ticket[0].length).trim() };
  return { body: description };
}
