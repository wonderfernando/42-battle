"use client"
import { Button, Card, CardBody, Code, Tab, Tabs, Textarea } from "@nextui-org/react";
import Editor from "@monaco-editor/react"
import { useRef } from "react";
import { Code2, Play, UploadCloud, Workflow, X } from "lucide-react";
import Link from "next/link";
export default function BattlePage({ params }) {
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }
    const handleEditorWillMount = (monaco) => {
        // Registrar a linguagem C
        monaco.languages.register({ id: "c" });

        // Configurar o realce de sintaxe (Monarch)
        monaco.languages.setMonarchTokensProvider("c", {
            tokenizer: {
                root: [
                    // Palavras-chave
                    [/\b(int|float|return|if|else|for|while|void|char|double)\b/, "keyword"],
                    // Identificadores
                    [/\b[a-zA-Z_][a-zA-Z0-9_]*\b/, "identifier"],
                    // Números
                    [/\b\d+(\.\d+)?\b/, "number"],
                    // Strings
                    [/"[^"]*"/, "string"],
                    // Comentários
                    [/\/\/.*/, "comment"],
                    [/\/\*[\s\S]*?\*\//, "comment"],
                ],
            },
        });

        // Configurar temas (opcional)
        monaco.editor.defineTheme("c-theme", {
            base: "vs-dark",
            inherit: true,
            rules: [
                { token: "keyword", foreground: "569cd6" },
                { token: "identifier", foreground: "dcdcaa" },
                { token: "number", foreground: "b5cea8" },
                { token: "string", foreground: "ce9178" },
                { token: "comment", foreground: "6a9955", fontStyle: "italic" },
            ],
            colors: {
                "editor.background": "#1e1e1e",
            },
        });
    };
    return (
        <div className="p-1 grid grid-cols-2 gap-2 bg-[#161616]">
            <div className="flex flex-col rounded-lg shadow  bg-[#1b1b1b] text-white gap-6 h-screen overflow-y-auto p-6">
                <h1 className="text-2xl font-extrabold">Print a Character</h1>
                <p>You are creating a function to write a character when called upon in the main using - ft_putchar(' ');
                    any character in the ' ' will be written when the main runs.<Code>Array</Code></p>
                <p className="font-extrabold">Excepted Output:</p>
                <p>a%</p>
            </div>

            <div className=" grid grid-rows-[1fr_250px] gap-2">
                <div className="bg-[#1b1b1b] shadow  rounded-lg p-4">
                    <span className="flex text-sm items-center text-green-500">Code <Code2 /> &nbsp; <span className="text-white">00:00:43</span></span>
                    <br />
                    <Editor
                        height={"50vh"}
                        defaultLanguage="c"
                        defaultValue={`#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    return 0;\n}`} onMount={handleEditorDidMount}
                        theme="c-theme"
                        beforeMount={handleEditorWillMount}
                    />
                </div>
                <div className="bg-[#1b1b1b] rounded-lg shadow p-2">
                    <Tabs color="default">
                        <Tab key="op" title="Opções">
                            <div className="flex gap-1">
                                <Button size="sm">Testar <Play className="text-green-700" size={16}/></Button>
                                <Link href="4234/report"><Button size="sm">Submter <UploadCloud className="text-blue-700" size={16}/></Button></Link>
                                <Button size="sm">Desitir <X className="text-red-700" size={16}/></Button>

                            </div>
                        </Tab>

                        <Tab key="re" title="Resultado">
                            <Card className="bg-red-200 text-red-700">
                                <CardBody>
                                   Error on line 32 expected {`{`}
                                </CardBody>
                            </Card>
                        </Tab>

                    </Tabs>

                </div>
            </div>
        </div>
    )
}