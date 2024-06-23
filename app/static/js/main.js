document.addEventListener('DOMContentLoaded', function() {
    // Dark and light mode toggle
    const toggleButton = document.querySelector('.toggle-btn');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        toggleButton.textContent = body.classList.contains('dark-theme') ? '🌞' : '🌙';
    });

    // Typing animation
    const typingElement = document.querySelector('.typing');
    const text = typingElement.textContent;
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent = text.slice(0, index + 1);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                index = 0;
                typingElement.textContent = '';
                type();
            }, 2000);
        }
    }

    type();

    // Dynamic content display
    const quotes = document.querySelectorAll('.quote');
    const goals = document.querySelectorAll('.goal');
    const problems = document.querySelectorAll('.problem');

    let currentQuote = 0;
    let currentGoal = 0;
    let currentProblem = 0;

    function showNextQuote() {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }

    function showNextGoal() {
        goals[currentGoal].classList.remove('active');
        currentGoal = (currentGoal + 1) % goals.length;
        goals[currentGoal].classList.add('active');
    }

    function showNextProblem() {
        problems[currentProblem].classList.remove('active');
        currentProblem = (currentProblem + 1) % problems.length;
        problems[currentProblem].classList.add('active');
    }

    setInterval(showNextQuote, 5000);
    setInterval(showNextGoal, 7000);
    setInterval(showNextProblem, 9000);

    // Confetti animation on form submission
    const form = document.querySelector('.form-signup');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const request = new XMLHttpRequest();
        request.open('POST', form.action);
        request.onload = function() {
            if (request.status === 200) {
                // Display confetti
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    confetti.style.left = `${Math.random() * 100}vw`;
                    confetti.style.animationDelay = `${Math.random() * 5}s`;
                    document.body.appendChild(confetti);

                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }
            }
        };
        request.send(formData);
    });

    // Form validation
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            const forms = document.getElementsByClassName('needs-validation');
            const validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
});
