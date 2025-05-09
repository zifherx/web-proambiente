"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle, Download } from "lucide-react";

import { Button } from "../ui/button";
import {toast} from 'sonner'

import { DownloadButtonProp } from "@/types/Props";

export function DownloadButton({filePath, fileName, variant, children}: DownloadButtonProp) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
        setIsLoading(true);
        const checkResponse = await fetch(filePath, { method: 'HEAD'});

        if(checkResponse.ok){
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName,
            link.target = '_blank'

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast(`Descarga iniciada ✔`, {
                description: `${fileName} se está descargando`,
                icon: <CheckCircle className="w-4 h-4 text-green-500"/>
            })
        }else{
            throw new Error('El archivo no está disponible')
        }
    } catch (err) {
        console.error("Error al descargar", err);
        toast("Error al descargar", {
            description: 'No se pudo descargar el archivo',
            icon: <AlertCircle className="h-4 w-4 text-red-500"/>,
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo')
            }
        })
    }finally{
        setIsLoading(false);
    }
}
  
    return (
    <Button size="lg" variant={variant} onClick={handleDownload} disabled={isLoading}>
        {
            isLoading ? (
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"/>
            ) : (
                <Download className="mr-2 h-4 w-4"/>
            )
        }
        { children }
    </Button>
  )
}
