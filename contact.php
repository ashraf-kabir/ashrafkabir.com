<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Contact - Ashraf Kabir</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/animate.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/aos.css">
    <link rel="stylesheet" href="assets/bootstrap/css/pikaday.min.css">
    <link rel="stylesheet" href="includes/css/style.css">
</head>

<body>

    <!-- header -->
    <?php include "includes/header.php"; ?>

    <main class="page contact-page">
        <section class="portfolio-block contact">
            <div class="container">
                <div class="heading">
                    <h2 data-aos="fade-up">Contact me</h2>
                </div>
                <form data-aos="zoom-in-up" data-aos-duration="1500"
                      data-bss-recipient="4c7cf26e9b3f2f682adc8d185716b13c">
                    <div class="form-group"><label for="name">Your Name</label><input class="form-control item"
                                                                                      type="text" id="name"
                                                                                      placeholder="Enter your name"
                                                                                      name="name" maxlength="30"></div>
                    <div class="form-group"><label for="subject">Subject</label><input class="form-control item"
                                                                                       type="text" id="subject"
                                                                                       placeholder="Enter Subject"
                                                                                       name="subject" required=""
                                                                                       maxlength="60"></div>
                    <div class="form-group"><label for="email">Email</label><input class="form-control item"
                                                                                   type="email" id="email" name="email"
                                                                                   placeholder="Enter your email"
                                                                                   required="" inputmode="email"></div>
                    <div class="form-group"><label for="message">Message</label><textarea class="form-control item"
                                                                                          id="message" name="msg"
                                                                                          placeholder="Write your message"
                                                                                          rows="5" required=""
                                                                                          maxlength="255"
                                                                                          autocomplete="off"
                                                                                          spellcheck="true"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success btn-lg" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- footer -->
    <?php include "includes/footer.php"; ?>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/smart-forms.min.js"></script>
    <script src="assets/js/bs-animation.js"></script>
    <script src="assets/bootstrap/js/aos.js"></script>
    <script src="assets/bootstrap/js/pikaday.min.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>