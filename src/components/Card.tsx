'use client'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react';


export const CardAI = () => {

    const staticMensages = [
        {id: 1, role: 'user', content: "Hi, how are you?"},
        {id: 2, role: 'assistant', content: "I'm fine, thanks! And you?"}
    ]

    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <Card className="h-[700px] w-[440px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
                <CardTitle>Card AI</CardTitle>
                <CardDescription>Created by Florenço's Studio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {staticMensages.map(m => (
                    <div key={m.id} className="flex gap-3 text-slate-600 text-sm">
                        <Avatar>
                            <AvatarFallback>{m.role === 'user' ? 'AF' : 'AI'}</AvatarFallback>
                            <AvatarImage src={m.role === 'user' ? "https://github.com/arthurflorenco.png" : "https://github.com/OPENAI.png"} />
                        </Avatar>
                        <p className="leading-relaxed">
                            <span className="font-bold block">{m.role === 'user' ? 'User ' : 'AI'}</span>
                            {m.content}
                        </p>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <form onSubmit={handleSubmit} className="space-x-2 flex w-full">
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}
