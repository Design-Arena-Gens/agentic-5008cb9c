import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type FocusMode = {
  title: string;
  theme: 'build' | 'refine' | 'mentor';
  hours: number;
  description: string;
  tags: string[];
};

type Momentum = {
  label: string;
  score: number;
  unit: string;
  description: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly focusModes: FocusMode[] = [
    {
      title: 'Design System Stewardship',
      theme: 'build',
      hours: 14,
      description:
        'Elevate React + Angular component parity, tighten token contracts, and deliver composable primitives.',
      tags: ['Design Tokens', 'Component APIs', 'Storybook CI'],
    },
    {
      title: 'Product Experiments',
      theme: 'refine',
      hours: 10,
      description:
        'Partner with product to iterate on dashboards, craft data visualizations, and validate flows quickly.',
      tags: ['Next.js', 'Signals', 'UX Research'],
    },
    {
      title: 'Mentoring & Enablement',
      theme: 'mentor',
      hours: 6,
      description:
        'Train squads on hybrid React+Angular workflows, pairing on complex bugs, and codifying best practices.',
      tags: ['Pairing', 'Architecture Reviews', 'Workshops'],
    },
    {
      title: 'Freelance Discovery',
      theme: 'refine',
      hours: 4,
      description:
        'Consult on design system audits, performance profiling, and migration planning for hybrid stacks.',
      tags: ['Audits', 'Performance', 'Stakeholder Workshops'],
    },
  ];

  readonly momentumSignals: Momentum[] = [
    {
      label: 'UI coverage',
      score: 92,
      unit: '%',
      description: 'Percentage of interactive states captured across React & Angular Storybook stories.',
    },
    {
      label: 'Core Web Vitals',
      score: 97,
      unit: 'pctl',
      description: 'Lighthouse 95th percentile passing threshold maintained for product surfaces.',
    },
    {
      label: 'Design token reuse',
      score: 83,
      unit: '%',
      description: 'Tokens powering both frameworks vs. legacy bespoke styling.',
    },
  ];

  readonly includeMentoring = signal(true);
  readonly includeFreelance = signal(true);

  readonly weeklyPlan = computed(() =>
    this.focusModes.filter((mode) => {
      if (!this.includeMentoring() && mode.theme === 'mentor') {
        return false;
      }
      if (!this.includeFreelance() && mode.title === 'Freelance Discovery') {
        return false;
      }
      return true;
    })
  );

  readonly totalHours = computed(() =>
    this.weeklyPlan().reduce((hours, mode) => hours + mode.hours, 0)
  );

  toggleMentoring(): void {
    this.includeMentoring.update((state) => !state);
  }

  toggleFreelance(): void {
    this.includeFreelance.update((state) => !state);
  }
}
