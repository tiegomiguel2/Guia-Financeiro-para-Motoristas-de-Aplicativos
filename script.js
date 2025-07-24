// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Download form handling
document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    
    if (!nome || !email) {
        alert('Por favor, preencha nome e e-mail para continuar.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.btn-download');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Create download link for the PDF
        const link = document.createElement('a');
        link.href = 'assets/eBook_Uber_5_Dicas.pdf';
        link.download = 'eBook_Uber_5_Dicas.pdf';
        link.click();
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Download Iniciado!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset form
        setTimeout(() => {
            document.getElementById('downloadForm').reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Show thank you message
            showThankYouMessage(nome);
        }, 2000);
        
    }, 1500);
});

function showThankYouMessage(nome) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 3rem;
            border-radius: 16px;
            text-align: center;
            max-width: 500px;
            margin: 20px;
        ">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: #10b981; margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 1rem; color: #1e293b;">Obrigado, ${nome}!</h3>
            <p style="color: #64748b; margin-bottom: 2rem;">
                Seu download foi iniciado. Verifique também sua pasta de downloads.
                <br><br>
                <strong>Gostou da amostra?</strong> O e-book completo tem muito mais conteúdo para transformar seus ganhos!
            </p>
            <button onclick="this.parentElement.parentElement.remove(); scrollToSection('preco')" 
                style="
                    background: linear-gradient(135deg, #2563eb, #1d4ed8);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    margin-right: 1rem;
                ">
                Ver E-book Completo
            </button>
            <button onclick="this.parentElement.parentElement.remove()" 
                style="
                    background: #f1f5f9;
                    color: #64748b;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">
                Fechar
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// FAQ toggle functionality
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.faq-question i').forEach(item => {
        if (item !== icon) {
            item.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ item
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Purchase button functionality
function comprarEbook() {
    // Create purchase modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 3rem;
            border-radius: 16px;
            text-align: center;
            max-width: 500px;
            margin: 20px;
        ">
            <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #2563eb; margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 1rem; color: #1e293b;">Finalizar Compra</h3>
            <p style="color: #64748b; margin-bottom: 2rem;">
                Você será redirecionado para nossa plataforma de pagamento segura.
                <br><br>
                <strong>Valor: R$ 97,00</strong>
                <br>
                Cartão, PIX ou Boleto
            </p>
            <button onclick="window.open('https://pay.hotmart.com/exemplo', '_blank'); this.parentElement.parentElement.remove();" 
                style="
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    margin-right: 1rem;
                ">
                <i class="fas fa-credit-card"></i> Pagar Agora
            </button>
            <button onclick="this.parentElement.parentElement.remove()" 
                style="
                    background: #f1f5f9;
                    color: #64748b;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">
                Cancelar
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.problem-item, .module, .testimonial, .tip-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.problem-item, .module, .testimonial, .tip-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Add floating WhatsApp button
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.createElement('div');
    whatsappBtn.innerHTML = `
        <a href="https://wa.me/5511999999999?text=Olá! Tenho interesse no e-book de gestão financeira para motoristas." 
           target="_blank" 
           style="
               position: fixed;
               bottom: 20px;
               right: 20px;
               background: #25d366;
               color: white;
               width: 60px;
               height: 60px;
               border-radius: 50%;
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 1.5rem;
               text-decoration: none;
               box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
               z-index: 1000;
               transition: transform 0.3s ease;
           "
           onmouseover="this.style.transform='scale(1.1)'"
           onmouseout="this.style.transform='scale(1)'">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.body.appendChild(whatsappBtn);
});

// Add countdown timer for urgency
function addCountdownTimer() {
    const timerElement = document.createElement('div');
    timerElement.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        z-index: 999;
        text-align: center;
        min-width: 200px;
    `;
    
    // Set countdown for 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            timerElement.innerHTML = `
                <div style="font-size: 0.8rem; margin-bottom: 0.5rem;">OFERTA TERMINA EM:</div>
                <div style="font-size: 1.2rem;">${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</div>
            `;
        } else {
            timerElement.innerHTML = `
                <div style="font-size: 0.9rem;">OFERTA EXPIRADA</div>
            `;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
    
    document.body.appendChild(timerElement);
    
    // Hide timer on mobile
    if (window.innerWidth <= 768) {
        timerElement.style.display = 'none';
    }
}

// Initialize countdown timer
document.addEventListener('DOMContentLoaded', addCountdownTimer);

