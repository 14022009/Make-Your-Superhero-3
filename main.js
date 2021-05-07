canvas = new fabric.Canvas("myCanvas");
var b_parts_height = 30;
var b_parts_width = 30;
var player_object = "";
player_x = 10;
player_y = 10;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(30);
        player_object.scaleToHeight(60);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        b_parts_img_object = Img;
        b_parts_img_object.scaleToWidth(b_parts_width);
        b_parts_img_object.scaleToHeight(b_parts_height);
        b_parts_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(b_parts_img_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "78") {
        console.log("m and shift pressed together")
        b_parts_width = b_parts_width + 10;
        b_parts_height = b_parts_height + 10;
        document.getElementById("c_width").innerHTML = b_parts_width;
        document.getElementById("c_height").innerHTML = b_parts_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("m and shift pressed together");
        b_parts_width = b_parts_width - 10;
        b_parts_height = b_parts_height - 10;
        document.getElementById("c_width").innerHTML = b_parts_width;
        document.getElementById("c_height").innerHTML = b_parts_height;
    }
    //Spiderman section
    if (keyPressed == '81') {
        new_image("spiderman_face.png");
        console.log("q");
    }
    if (keyPressed == "	87") {
        new_image("spiderman_body.png");
        console.log("w");
    }
    if (keyPressed == "69") {
        new_image("spiderman_right_hand.png");
        console.log("e");
    }
    if (keyPressed == "82") {
        new_image("spiderman_left_hand.png");
        console.log("r");
    }
    if (keyPressed == "84") {
        new_image("spiderman_legs.png");
        console.log("t");
    }
    //spiderman section end
    //ironman section
    if (keyPressed == "65") {
        new_image("ironman_face.png");
        console.log("a");
    }

    if (keyPressed == "83") {
        new_image("ironman_body.png");
        console.log("s");
    }

    if (keyPressed == "68") {
        new_image("ironman_right_hand.png");
        console.log("d");
    }


    if (keyPressed == "70") {
        new_image("ironman_left_hand.png");
        console.log("f");
    }

    if (keyPressed == "83") {
        new_image("ironman_leg.png");
        console.log("g");
    }
    //ironman section end

    //captain america
    if (keyPressed == "85") {
        new_image("captain_america_left_hand.png");
        console.log("u");
    }
    //captain america end

    //thor
    if (keyPressed == "74") {
        new_image("thor_face.png");
        console.log("j");

    }

    if (keyPressed == "75") {
        new_image("thor_right_hand.png");
        console.log("k");
    }

    if (keyPressed == "76") {
        new_image("thor_left_hand.png");
        console.log("l");
    }
    //thor end
    //Hulk
    if (keyPressed == "90") {
        new_image("hulk_face.png");
        console.log("z");
    }

    if (keyPressed == "88") {
        new_image("hulkd_body.png");
        console.log("x");
    }

    if (keyPressed == "67") {
        new_image("hulk_right_hand.png");
        console.log("c");
    }

    if (keyPressed == "86") {
        new_image("hulk_left_hand.png");
        console.log("v");
    }

    if (keyPressed == "66") {
        new_image("hulk_legs.png");
        console.log("b");
    }

    //Hulk end
    //player
    if (keyPressed == '38') {
        up();
    }

    if (keyPressed == '40') {
        down();
    }

    if (keyPressed == '37') {
        left();
    }

    if (keyPressed == '39') {
        right();
    }
    //player end
}

function up() {
    if (player_y >= 100)
        player_y = player_y - b_parts_height;
    //canvas.remove will remove the image from the canvas
    canvas.remove(player_object);
    player_update();
    console.log("Working");
    console.log(player_y);
}

function down() {
    if (player_y <= 400)
        player_y = player_y + b_parts_height;
    canvas.remove(player_object);
    player_update();
    console.log("Working");
    console.log(player_y);
}

function left() {
    if (player_x >= 0)
        player_x = player_x - b_parts_width;
    canvas.remove(player_object);
    player_update();
    console.log("Working");
    console.log(player_x);
}

function right() {
    if (player_x <= 1210)
        player_x = player_x + b_parts_width;
    canvas.remove(player_object);
    player_update();
    console.log("Working");
    console.log(player_x);
}