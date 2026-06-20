const SUPABASE_URL = "https://qrskdnptjtjsuvuutvdz.supabase.co";
const SUPABASE_KEY = "sb_publishable_3g4NKbhvEduQXGfCnUQnUw_zwPpUNtf";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("customerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const customer = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value
  };

  const { error } = await supabase
    .from("customers")
    .insert([customer]);

  if (error) {
    message.innerHTML = "Error saving customer!";
    console.log(error);
  } else {
    const today = new Date().toLocaleDateString();

    message.innerHTML =
      `Customer saved successfully.<br><br>
      Thank you for visiting RELIABLE COMPUTECH on ${today}. Your work will be completed soon. We will inform you once our job is completed.`;

    form.reset();
  }
});
