from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.conf import settings
from pymongo import MongoClient
from datetime import timedelta
from bson import ObjectId

class Command(BaseCommand):
    help = 'Populate the database with test data for users, teams, activity, leaderboard, and workouts'

    def handle(self, *args, **kwargs):
        # Remove all data from collections using Django ORM
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create users and save individually
        users = []
        user_data = [
            ('thundergod', 'thundergod@mhigh.edu', 'thundergodpassword'),
            ('metalgeek', 'metalgeek@mhigh.edu', 'metalgeekpassword'),
            ('zerocool', 'zerocool@mhigh.edu', 'zerocoolpassword'),
            ('crashoverride', 'crashoverride@hmhigh.edu', 'crashoverridepassword'),
            ('sleeptoken', 'sleeptoken@mhigh.edu', 'sleeptokenpassword'),
        ]
        for username, email, password in user_data:
            user = User(username=username, email=email, password=password)
            user.save()
            users.append(user)

        # Create teams and add all users
        blue_team = Team(name='Blue Team')
        blue_team.save()
        gold_team = Team(name='Gold Team')
        gold_team.save()
        blue_team.members.set(users)
        gold_team.members.set(users)

        # Create activities
        activities = [
            ('Cycling', users[0], timedelta(hours=1)),
            ('Crossfit', users[1], timedelta(hours=2)),
            ('Running', users[2], timedelta(hours=1, minutes=30)),
            ('Strength', users[3], timedelta(minutes=30)),
            ('Swimming', users[4], timedelta(hours=1, minutes=15)),
        ]
        for activity_type, user, duration in activities:
            activity = Activity(user=user, activity_type=activity_type, duration=duration)
            activity.save()

        # Create leaderboard entries
        leaderboard_entries = [
            (users[0], 100),
            (users[1], 90),
            (users[2], 95),
            (users[3], 85),
            (users[4], 80),
        ]
        for user, score in leaderboard_entries:
            entry = Leaderboard(user=user, score=score)
            entry.save()

        # Create workouts
        workouts = [
            ('Cycling Training', 'Training for a road cycling event'),
            ('Crossfit', 'Training for a crossfit competition'),
            ('Running Training', 'Training for a marathon'),
            ('Strength Training', 'Training for strength'),
            ('Swimming Training', 'Training for a swimming competition'),
        ]
        for name, description in workouts:
            workout = Workout(name=name, description=description)
            workout.save()

        self.stdout.write(self.style.SUCCESS('Successfully populated the database with test data.'))
