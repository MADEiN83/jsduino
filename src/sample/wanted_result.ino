const int LEDS_COUNT = 6;
const int LEDS[LEDS_COUNT] = {13, 12, 11, 10, 9, 8};

const int DICE_NUMBERS[LEDS_COUNT][LEDS_COUNT] = {
    {LEDS[0]},                                             // 1
    {LEDS[0], LEDS[5]},                                    // 2
    {LEDS[0], LEDS[1], LEDS[5]},                           // 3
    {LEDS[0], LEDS[2], LEDS[3], LEDS[5]},                  // 4
    {LEDS[0], LEDS[2], LEDS[3], LEDS[5]},                  // 5
    {LEDS[0], LEDS[1], LEDS[2], LEDS[3], LEDS[4], LEDS[5]} //6
};

void setup()
{
    Serial.begin(9600);

    for (int i = 0; i < LEDS_COUNT; ++i)
    {
        pinMode(LEDS[i], OUTPUT);
    }
}

void loop()
{
    on(DICE_NUMBERS[5]);
}

void on(int *leds)
{
    offAllLeds();

    for (int i = 0; i < LEDS_COUNT; ++i)
    {
        digitalWrite(leds[i], LOW);
    }
}

void offAllLeds()
{
    for (int i = 0; i < LEDS_COUNT; ++i)
    {
        digitalWrite(LEDS[i], HIGH);
    }
}
