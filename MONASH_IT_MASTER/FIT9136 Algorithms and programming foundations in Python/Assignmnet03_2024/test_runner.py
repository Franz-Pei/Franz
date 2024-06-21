import unittest
from runner import Runner
from custom_errors import *

class TestRunner(unittest.TestCase):
    def test_runner_initialization(self):
         # Create a runner instance for testing
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        
        # Check the initialization of attributes
        self.assertEqual(runner.name, 'Elijah')
        self.assertEqual(runner.age, 18)
        self.assertEqual(runner.country, 'Australia')
        self.assertEqual(runner.sprint_speed, 5.8)
        self.assertEqual(runner.endurance_speed, 4.4)
        self.assertEqual(runner.energy, Runner.max_energy)
    
    def test_invalid_name(self):
         # Check for an invalid name with special characters
        with self.assertRaises(CustomValueError):
            Runner('Elijah!', 18, 'Australia', 5.8, 4.4)
    
    def test_invalid_age(self):
        # Check for an invalid age value
        with self.assertRaises(CustomValueError):
            Runner('Elijah', 121, 'Australia', 5.8, 4.4)
    
    def test_invalid_country(self):
        # Check for an invalid country not in the list
        with self.assertRaises(CustomValueError):
            Runner('Elijah', 18, 'InvalidCountry', 5.8, 4.4)
    
    def test_invalid_sprint_speed(self):
        # Check for an invalid sprint speed exceeding the maximum
        with self.assertRaises(CustomValueError):
            Runner('Elijah', 18, 'Australia', 7.0, 4.4)

    def test_invalid_endurance_speed(self):
        # Check for an invalid endurance speed exceeding the maximum
        with self.assertRaises(CustomValueError):
            Runner('Elijah', 18, 'Australia', 5.8, 6.0)
    
    def test_drain_energy_negative(self):
        # Check for draining energy with a negative value
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomValueError):
            runner.drain_energy(-100)
    
    def test_drain_energy_zero(self):
        # Check for draining energy with zero value
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        initial_energy = runner.energy
        runner.drain_energy(0)
        self.assertEqual(runner.energy, initial_energy)

    def test_drain_energy_exceed_max(self):
        # Check for draining energy exceeding maximum energy
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomValueError):
            runner.drain_energy(1100)
    
    def test_recover_energy_nagative(self):
        # Check for recovering energy with a negative value
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomValueError):
            runner.recover_energy(-100)
    
    def test_recover_energy_zero(self):
        # Check for recovering energy with zero value
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        initial_energy = runner.energy
        runner.recover_energy(0)
        self.assertEqual(runner.energy, initial_energy)
    
    def test_recover_energy_exceed_max(self):
        # Check for recovering energy exceeding maximum energy
        runner = Runner('Elijah', 18, 'Australia', 5.8,4.4)
        with self.assertRaises(CustomValueError):
            runner.recover_energy(1100)
    
    def test_run_race_short(self):
         # Check for running a short race
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        time_taken = runner.run_race('short', 2.0)
        self.assertAlmostEqual(time_taken, 0.344834*1000, places=2)
    
    def test_run_race_long(self):
        # Check for running a long race
        runner = Runner('Elijah', 18 , 'Australia', 5.8, 4.4)
        time_taken = runner.run_race('long', 10.0)
        self.assertAlmostEqual(time_taken, 2.2727311*1000, places=2)
    
    def test_run_race_invalid_value(self):
        # Check for running a race with an invalid race type
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomValueError):
            runner.run_race('medium', 5)
    
    def test_run_race_invalid_type(self):
        # Check for running a race with an invalid distance type
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomTypeError):
            runner.run_race('short', '5')
    
    def test_run_race_invalid_distance(self):
        # Check for running a race with an invalid negative distance
        runner = Runner('Elijsh', 18, 'Australia', 5.8, 4.4)
        with self.assertRaises(CustomValueError):
            runner.run_race('short', -2.3)
    
    def test_run_race_zero_distance(self):
        # Check for running a race with zero distance
        runner = Runner('Elijah', 18, 'Australia', 5.8, 4.4)
        time_taken = runner.run_race('short', 0.0)
        self.assertEqual(time_taken, 0)
        
if __name__ == '__main__':
    unittest.main()

