process.stdout.write("Hello world!");
process.stdout.write("Hello \nworld!");
process.stdout.write("123");
let number = 123;
process.stdout.write(number.toString());
process.stdin.on('data', function(inputFromUser) {
    // دستوراتی که باید پس از وارد کردن چیزی توسط کاربر اجرا شود
    let givenInput = inputFromUser.toString();  // تبدیل ورودی به رشته
    console.log("You typed: " + givenInput);    // نمایش ورودی
    process.exit();  // خاتمه دادن به فرآیند پس از دریافت ورودی
  });
  
