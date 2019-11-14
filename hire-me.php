<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Hire me - Ashraf Kabir</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/css/pikaday.min.css">
</head>

<body>
    <!-- header -->
    <?php include "includes/header.php"; ?>

    <main class="page hire-me-page">
        <section class="portfolio-block hire-me">
            <div class="container">
                <div class="heading">
                    <h2 data-aos="fade-up">Hire Me</h2>
                </div>
                <form data-aos="zoom-in" data-aos-duration="1000" data-bss-recipient="4c7cf26e9b3f2f682adc8d185716b13c">
                    <div class="form-group"><label for="subject">Subject</label><select class="form-control"
                                                                                        id="subject" required="">
                            <option value="" selected="">Choose Subject</option>
                            <option value="1">Web Developer</option>
                            <option value="2">Image Editor</option>
                            <option value="3">Content Creator</option>
                        </select></div>
                    <div
                            class="form-group"><label for="email">Email</label><input class="form-control" type="email"
                                                                                      id="email" name="email2"
                                                                                      required=""
                                                                                      placeholder="Enter your email"
                                                                                      inputmode="email"></div>
                    <div class="form-group"><label for="message">Message</label><textarea class="form-control"
                                                                                          id="message" rows="5"
                                                                                          name="msg2"
                                                                                          placeholder="Write your message"
                                                                                          maxlength="255" required=""
                                                                                          autocomplete="off"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-6"><label for="hire-date">Date</label><input class="form-control"
                                                                                            id="hire-date" type="date"
                                                                                            required="" name="date">
                            </div>
                            <div class="col-md-6 button">
                                <button class="btn btn-success btn-block" type="submit">Hire Me</button>
                            </div>
                        </div>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>