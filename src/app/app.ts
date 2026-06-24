import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // AQUI PONES EL NUMERO DE WHATSAPP DEL ASESOR (Código de país + número, sin el +)
  telefonoWhatsApp = '51999999999'; 

  // Esta función procesa el formulario
  enviarMensaje(form: NgForm) {
    // 1. Validar si el formulario está incompleto
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return; 
    }

    // 2. Extraer los datos del formulario
    const { nombre, empresa, division, mensaje } = form.value;

    // 3. Armar el texto para WhatsApp (%0A es un salto de línea)
    const texto = `Hola Grupo ARVI, mi nombre es *${nombre}* de la empresa *${empresa}*.%0A%0AMe interesa cotizar servicios de la división: *${division}*.%0A%0A*Mensaje:* ${mensaje}`;
    
    // 4. Abrir la ventana de WhatsApp
    const url = `https://wa.me/${this.telefonoWhatsApp}?text=${texto}`;
    window.open(url, '_blank');
  }
}