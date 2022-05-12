class Test {
    int test_a, test_b;

    Test(int a, int b) {
        test_a = a;
        test_b = b;
    }
    void display() {
        System.out.println(test_a + " " + test_b);
    }

    public static void main(String args[]) {
        Test test = new Test(10,20);
        test.display();
        System.out.println(test.test_a + " " + test.test_b);
    }
}
