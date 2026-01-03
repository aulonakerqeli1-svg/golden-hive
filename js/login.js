
    function showForm(formId) {
      // Hiq klasin active nga të gjitha
      document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

      // Trego form-in e zgjedhur dhe bëj butonin active
      document.getElementById(formId).classList.add('active');
      document.querySelector(`.tab-btn[onclick="showForm('${formId}')"]`).classList.add('active');
    }
