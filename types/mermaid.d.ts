declare module "mermaid" {
  interface Mermaid {
    initialize(config: Record<string, unknown>): void;
    render(id: string, text: string): Promise<{ svg: string }>;
  }
  const mermaid: Mermaid;
  export default mermaid;
}
