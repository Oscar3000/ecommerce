const checkEngine = (): "client" | "server" => (typeof document === "object" ? "client" : "server");

export { checkEngine };
