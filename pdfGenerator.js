window.addEventListener('load', () => {
    const downloadBtn = document.getElementById('download-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Add a class to the body to apply PDF-specific styles
            document.body.classList.add('pdf-generation-mode');

            const element = document.getElementById('cv-container');
            const opt = {
                margin:       [0.5, 0.5, 0.5, 0.5],
                filename:     'Sravani_Venkata_CV.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };

            // Generate the PDF
            html2pdf().set(opt).from(element).save().then(() => {
                // Remove the class after the PDF is generated
                document.body.classList.remove('pdf-generation-mode');
            });
        });
    }
});