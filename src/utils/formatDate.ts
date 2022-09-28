import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(created_at: string | Date): string {
  return formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  });
}